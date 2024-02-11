// Purpose: Main component to render the form and handle language change.

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./App.css";

const App = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleLanguageChange = (lng) => {
    i18next.changeLanguage(lng);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="container">
      <h2>{t('form')}</h2>

      <div className="language-select">
        <select onChange={(e) => handleLanguageChange(e.target.value)}>
          {/* Add more options for other languages */}
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="my">Malay</option>
        </select>
      </div>

      <label htmlFor="name">{t('name')}</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="age">{t('age')}</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <label htmlFor="address">{t('address')}</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <label htmlFor="email">{t('email')}</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">{t('phone')}</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {t('submit')}
      </button>

    </div>
  );
};

export default App;
