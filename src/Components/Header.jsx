import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  const texts = {
    uz: {
      home: 'Bosh sahifa',
      menu: 'Menyu',
      aboutUs: 'Biz haqimizda',
      contacts: 'Aloqa',
      title: 'Katta gamburger',
      subtitle: 'Mol go‘shti',
      description: 'Yangi xushbo‘y non, salat barglari, marinadlangan bodring va piyoz, mayonez va ketchup bilan xizmat qilinadigan kichik kotleta – bu gamburgerning klassik tasviri.',
      price: '14 500'
    },
    ru: {
      home: 'Главная',
      menu: 'Меню',
      aboutUs: 'О нас',
      contacts: 'Контакты',
      title: 'Большой гамбургер',
      subtitle: 'Говядина',
      description: 'Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера.',
      price: '14 500'
    }
  };

  const themeClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={themeClass}>
      <header className="max-w-[1440px] mx-auto">
        <div className="container max-w-[1200px] mx-auto">
          <nav className="flex justify-between">
            <div className="nav_left">
              <div className="logo">
                <p className="w-[160px] h-[30px] bg-[#4E9F0D] text-[#FFFFFF] pl-[37px] font-Raleway font-normal text-[20px] mt-[26px]">STREET88</p>
              </div>
            </div>
            <div className="nav_right">
              <ul className="flex">
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[20px]">
                  {texts[language].home}
                </li>
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[30px]">
                  {texts[language].menu}
                </li>
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[34px]">
                  {texts[language].aboutUs}
                </li>
                <li className="w-[127px] h-[90px] text-[#4E9F0D] hover:bg-[#4E9F0D] hover:text-[#FFFFFF] text-[18px] font-Raleway font-medium pt-[25px] pl-[18px]">
                  {texts[language].contacts}
                </li>
              </ul>
            </div>
          </nav>
          <main>
            <h1 className="text-[#4E9F0D] text-[86px] font-black font-Raleway mt-[130px]">{texts[language].title}</h1>
            <span className="text-[#4E9F0D] font-Raleway font-normal text-[36px]">{texts[language].subtitle}</span>
            <p className="max-w-[1169px] text-[#FFFFFF] text-[18px] font-normal font-Raleway mt-[40px]">
              {texts[language].description}
            </p>
            <button className="w-[350px] h-[100px] bg-[#4E9F0D] text-[#FFFFFF] font-Raleway font-thin text-[60px] mt-[65px] mb-[120px]">
              {texts[language].price}
            </button>
          </main>
          <button onClick={toggleLanguage} className="text-[#4E9F0D]">Toggle Language</button>
          <button onClick={toggleTheme} className="ml-4 text-[#4E9F0D]">Toggle Theme</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
