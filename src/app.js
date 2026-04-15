import {createHeader} from './components/header.js';
import {createHero} from './components/hero.js';
import {createBlogs} from './components/blog.js';
import {createAbout} from './components/about.js';
import {createContact} from './components/contact.js';
import {createFooter} from './components/footer.js';

const app = document.querySelector('#app');

function renderApp()
{
    app.innerHTML = `
    ${createHeader()}
    <main>
        ${createHero()}
        ${createBlogs()}
        ${createAbout()}
        ${createContact()}
    </main>
    ${createFooter()}
    `;
}

renderApp();