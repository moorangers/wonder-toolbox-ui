import { useI18n } from './context';

export const useTranslation = () => {
  const { t } = useI18n();
  return { t };
};

export const useLanguage = () => {
  const { language, setLanguage } = useI18n();
  return { language, setLanguage };
};
