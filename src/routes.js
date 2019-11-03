import MainPage from './Components/Pages/MainPage/MainPage'
import What from './Components/Pages/What/What'
import Works from './Components/Pages/Works/Works'
import NotFound from './Components/Pages/NotFound/NotFound'
import Price from "./Components/Pages/Price/Price";

const routes = [
    {
        path: '/',
        exact: true,
        component: MainPage,
        title: 'Сервисное обслуживание систем вентиляции, аспирации и кондиционирования воздуха в городских инженерных сетях'
    },
    {
        path: '/what',
        exact: true,
        component: What,
        title: 'Что мы делаем'
    },
    {
        path: '/works',
        exact: true,
        component: Works,
        title: 'Наши работы',
    },
    {
        path: '/prices',
        exact: true,
        component: Price,
        title: 'Стоимость',
    },
    {
        path: '*',
        component: NotFound,
        title: 'Ошибка 404. Страница не найдена',
    }

];

export default routes;
