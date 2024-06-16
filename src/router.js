import {createRouter, createWebHistory} from 'vue-router';
import HomeView from './components/pages/HomeView.vue';
import UsersView from './components/user/UsersView.vue';
import PostsView from './components/posts/PostsView.vue';
import UserInfoView from "@/components/user/UserInfoView";
import TemplateOfPosts from "@/components/posts/templateOfPosts";
import EditPost from "@/components/posts/EditPost";
import CreatPost from "@/components/posts/CreatPost";

import TaskIndex from './components/pages/tasks/TaskIndex';
import ProductIndex from "@/components/pages/products/ProductIndex";
import ProductCard from '@/components/pages/products/ProductCard';

const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/users', name: 'users', component: UsersView},
    {path: '/users/:id', name: 'userId', component: UserInfoView},
    {
        path: '/posts', name: 'postsTemplate', component: TemplateOfPosts, children: [
            {path: '', name: 'posts', component: PostsView},
            {path: ':id', name: 'postsId', component: EditPost},
            {path: '/creatPost', name: 'creatPost', component: CreatPost},
        ]
    },
    {path: '/task', name: 'task', component: TaskIndex},
    {path: '/product', name: 'product', component: ProductIndex},
    {path: '/addProduct', name: 'addProduct', component: ProductCard},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
