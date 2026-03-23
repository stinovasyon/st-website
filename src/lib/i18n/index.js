import { writable, derived } from 'svelte/store';
import tr from './tr.json';
import en from './en.json';

/** @type {Record<string, typeof tr>} */
const translations = { tr, en };

export const locale = writable('tr');

export const t = derived(locale, ($locale) => {
	const trans = translations[$locale] || translations.tr;

	/** @param {string} key */
	return (key) => {
		const keys = key.split('.');
		/** @type {any} */
		let value = trans;

		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = value[k];
			} else {
				console.warn(`Translation missing for key: ${key}`);
				return key;
			}
		}

		return value;
	};
});

/** @param {string} newLocale */
export function setLocale(newLocale) {
	if (translations[newLocale]) {
		locale.set(newLocale);
		localStorage.setItem('locale', newLocale);
	}
}

export function initLocale() {
	const saved = localStorage.getItem('locale');
	if (saved && translations[saved]) {
		locale.set(saved);
	}
}

export const availableLocales = [
	{ code: 'tr', name: 'Türkçe', flag: 'TR' },
	{ code: 'en', name: 'English', flag: 'EN' }
];
