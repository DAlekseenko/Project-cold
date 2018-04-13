import MainPage from './Components/Pages/MainPage/MainPage'
import What from './Components/Pages/What/What'
import Works from './Components/Pages/Works/Works'
import {NotFound} from './Components/Pages/NotFound/NotFound'

const routes = [
    {
        path: '/',
        exact: true,
        component: MainPage,
        title: 'Главная страница'
    },
    {
        path: '/what',
        exact: true,
        component: What,
        title: 'Что мы делаем'
    },
    {
        path: '/works',
        component: Works,
        title: 'Наши работы',
    },
    {
        path: '*',
        component: NotFound,
        title: 'Ошибка 404. Страница не найдена',
    }

];

export default routes;
