import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'zh', label: '中文' },
  ];

  const handleChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const currentLang = languages.find(lang => lang.value === i18n.language) || languages[0];

  return (
    <Select
      value={currentLang}
      onChange={handleChange}
      options={languages}
      className="w-24"
      styles={{
        control: (base) => ({
          ...base,
          minHeight: '30px',
          fontSize: '12px',
        }),
        container: (base) => ({
          ...base,
          width: '80px',
        }),
      }}
      isSearchable={false}
    />
  );
};

export default LanguageSwitcher;