import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import PageHeader from '../components/layout/PageHeader';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { COLORS, SPACING, SIZES, SHADOWS } from '../lib/theme';
import { FeedbackSubmission } from '../types';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // In a real app, this would be sent to a backend API
        const submission: FeedbackSubmission = {
          id: Date.now().toString(),
          ...formData,
          timestamp: new Date(),
          status: 'Pending'
        };
        
        console.log('Feedback submitted:', submission);
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };
  
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  
  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <PageHeader title="Contact Us" />
      
      <ScrollView style={styles.scrollView}>
        {isSubmitted ? (
          <Card style={styles.successCard}>
            <CardContent>
              <View style={styles.successContent}>
                <MaterialIcons name="check-circle" size={64} color={COLORS.success} />
                <Text style={styles.successTitle}>Thank You!</Text>
                <Text style={styles.successMessage}>
                  Your message has been submitted successfully. We will get back to you as soon as possible.
                </Text>
                <Button 
                  title="Send Another Message" 
                  onPress={resetForm}
                  variant="primary"
                  style={styles.submitButton}
                />
              </View>
            </CardContent>
          </Card>
        ) : (
          <>
            <Text style={styles.introText}>
              Have a question or feedback? Fill out the form below to get in touch with the Computer Science Department.
            </Text>
            
            <Card style={styles.formCard}>
              <CardContent>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    style={[styles.input, errors.name && styles.inputError]}
                    placeholder="Your full name"
                    value={formData.name}
                    onChangeText={(value) => handleInputChange('name', value)}
                  />
                  {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                </View>
                
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={[styles.input, errors.email && styles.inputError]}
                    placeholder="Your email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                  />
                  {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                </View>
                
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Subject</Text>
                  <TextInput
                    style={[styles.input, errors.subject && styles.inputError]}
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChangeText={(value) => handleInputChange('subject', value)}
                  />
                  {errors.subject && <Text style={styles.errorText}>{errors.subject}</Text>}
                </View>
                
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Message</Text>
                  <TextInput
                    style={[styles.textArea, errors.message && styles.inputError]}
                    placeholder="Your message"
                    multiline
                    numberOfLines={6}
                    textAlignVertical="top"
                    value={formData.message}
                    onChangeText={(value) => handleInputChange('message', value)}
                  />
                  {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
                </View>
                
                <Button 
                  title={isSubmitting ? "Submitting..." : "Submit"}
                  onPress={handleSubmit}
                  variant="primary"
                  disabled={isSubmitting}
                  style={styles.submitButton}
                />
              </CardContent>
            </Card>
            
            <Card style={styles.contactInfoCard}>
              <CardContent>
                <Text style={styles.contactTitle}>Contact Information</Text>
                
                <View style={styles.contactItem}>
                  <MaterialIcons name="location-on" size={24} color={COLORS.primary} style={styles.contactIcon} />
                  <View>
                    <Text style={styles.contactLabel}>Address</Text>
                    <Text style={styles.contactText}>Computer Science Department, University for Development Studies, Tamale, Ghana</Text>
                  </View>
                </View>
                
                <View style={styles.contactItem}>
                  <MaterialIcons name="phone" size={24} color={COLORS.primary} style={styles.contactIcon} />
                  <View>
                    <Text style={styles.contactLabel}>Phone</Text>
                    <Text style={styles.contactText}>+233 20 123 4567</Text>
                  </View>
                </View>
                
                <View style={styles.contactItem}>
                  <MaterialIcons name="email" size={24} color={COLORS.primary} style={styles.contactIcon} />
                  <View>
                    <Text style={styles.contactLabel}>Email</Text>
                    <Text style={styles.contactText}>cs.department@uds.edu.gh</Text>
                  </View>
                </View>
              </CardContent>
            </Card>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    padding: SPACING.md,
  },
  introText: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    marginBottom: SPACING.md,
    lineHeight: 22,
  },
  formCard: {
    marginBottom: SPACING.md,
    ...SHADOWS.medium,
  },
  formGroup: {
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.gray[700],
    marginBottom: SPACING.xs,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: 8,
    paddingHorizontal: SPACING.md,
    fontSize: SIZES.md,
    color: COLORS.gray[800],
    backgroundColor: COLORS.white,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: 8,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    fontSize: SIZES.md,
    color: COLORS.gray[800],
    backgroundColor: COLORS.white,
    minHeight: 120,
  },
  errorText: {
    color: COLORS.error,
    fontSize: SIZES.sm,
    marginTop: 4,
  },
  submitButton: {
    marginTop: SPACING.sm,
  },
  contactInfoCard: {
    marginBottom: SPACING.xl,
    ...SHADOWS.small,
  },
  contactTitle: {
    fontSize: SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginBottom: SPACING.md,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  contactIcon: {
    marginRight: SPACING.md,
    marginTop: 2,
  },
  contactLabel: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.gray[700],
  },
  contactText: {
    fontSize: SIZES.md,
    color: COLORS.gray[800],
  },
  successCard: {
    marginVertical: SPACING.xl,
    ...SHADOWS.medium,
  },
  successContent: {
    alignItems: 'center',
    padding: SPACING.md,
  },
  successTitle: {
    fontSize: SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.gray[800],
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  successMessage: {
    fontSize: SIZES.md,
    color: COLORS.gray[700],
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 22,
  },
});

export default Contact;
