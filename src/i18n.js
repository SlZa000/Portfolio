import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl', // Domyślny język
    lng: localStorage.getItem('language') || 'pl', // Język zapisany w localStorage
    backend: {
      loadPath: (languages, namespaces) => {
        const textToTranslate = namespaces[0]; // Tekst do tłumaczenia
        const targetLanguage = languages[0]; // Docelowy język tłumaczenia
        return `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pl&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(textToTranslate)}`;
      },
      parse: (data) => data[0][0][0] // Odbiera tłumaczenie
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // Wyłączenie suspense, aby uniknąć problemów z inicjalizacją
    },
  });

// Nasłuchiwacz na zmiany w localStorage
window.addEventListener('storage', (event) => {
  if (event.key === 'language') {
    const newLanguage = event.newValue || 'pl';
    i18n.changeLanguage(newLanguage);
  }
});

export default i18n;
