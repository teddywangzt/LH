import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

/*
function getUrlParams(name) {
  const params = {};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => {
    params[key] = value;
  });

  return name ? params[name] : params;
}
*/

const defaultLang =
  window.localStorage.getItem("local") ||
  window.navigator.language ||
  window.navigator.browserLanguage ||
  "en";

export default new VueI18n({
  locale: defaultLang.indexOf("zh") > -1 ? "zh" : "en",
  fallbackLocale: "zh",
  messages: loadLocaleMessages()
});
