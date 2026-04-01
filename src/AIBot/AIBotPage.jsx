import { Link } from 'react-router-dom';
import './style/ai-bot-page.css';
import { Heading } from './abp-heading';
import { AbpSearch } from './abp-search';
import homeIcon from './assets/icons/Home.svg';

export function AIBotPage() {
  return (
    <div className="ai-bot-page">
      <div className='ellipse'></div>

      <Link to="/" className="abp-home-btn">
        <img src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>

      <Heading />
      <AbpSearch />
    </div>
  );
}
