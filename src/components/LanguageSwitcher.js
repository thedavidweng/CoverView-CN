import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'zh', label: '中文' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'pt', label: 'Português' },
  { value: 'ru', label: 'Русский' },
  { value: 'ar', label: 'العربية' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'it', label: 'Italiano' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'pl', label: 'Polski' },
  { value: 'tr', label: 'Türkçe' },
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'th', label: 'ไทย' },
  { value: 'id', label: 'Bahasa Indonesia' },
  { value: 'uk', label: 'Українська' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const currentLang = languages.find(lang => lang.value === i18n.language) || languages[0];

  return (
    <Select
      value={currentLang}
      onChange={handleChange}
      options={languages}
      className="w-28"
      styles={{
        control: (base) => ({
          ...base,
          minHeight: '32px',
          fontSize: '12px',
        }),
        container: (base) => ({
          ...base,
          width: '110px',
        }),
      }}
      isSearchable={false}
    />
  );
};

export default LanguageSwitcher;