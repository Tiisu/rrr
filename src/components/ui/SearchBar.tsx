import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SPACING, SIZES, SHADOWS } from '../../lib/theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={24} color={COLORS.gray[400]} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray[400]}
      />
      {value.length > 0 && (
        <MaterialIcons
          name="close"
          size={24}
          color={COLORS.gray[400]}
          onPress={() => onChangeText('')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginVertical: SPACING.md,
    marginHorizontal: SPACING.md,
    ...SHADOWS.small,
  },
  input: {
    flex: 1,
    marginLeft: SPACING.sm,
    fontSize: SIZES.md,
    color: COLORS.gray[800],
  },
});

export default SearchBar;
