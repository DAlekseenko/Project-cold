import Main from './Components/Main'
import About from './Components/About'
import {NotFound} from './Components/NotFound'

const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
        title: 'Главная страница'
    },
    {
        path: '/about',
        exact: true,
        component: About,
        title: 'Главная страница'
    },
    {
        path: '*',
        component: NotFound,
        title: 'Ошибка 404. Страница не найдена',
    }
];

export default routes;
