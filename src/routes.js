import React from 'react';

const CreateAuction = React.lazy(() => import('./views/auth/create-auction.js'));
const MyAuctions = React.lazy(() => import('./views/auth/my-auctions.js'));

const routes = [
    { path: '/auctions/create', exact: true, name: 'Adicionar novo item para leilão', component: CreateAuction },
    { path: '/auctions', exact: true, name: 'Todos os meus itens para leilão', component: MyAuctions },
];

export default routes;