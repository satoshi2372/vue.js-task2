import Vue from 'vue';
import Router from 'vue-router';
import Step1 from './views/Step1.vue';
const Step2 = () => import(/* webpackChunkName: "step2"*/ './views/Step2.vue');
const Step3 = () => import(/* webpackChunkName: "step3"*/ './views/Step3.vue');
const Step4 = () =>
  import(/* webpackChunkName: "confirm"*/ './views/Step4.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'step1',
      component: Step1,
    },
    {
      path: '/step2/',
      name: 'step2',
      component: Step2,
    },
    {
      path: '/step3',
      name: 'step3',
      component: Step3,
    },
    {
      path: '/step4',
      name: 'step4',
      component: Step4,
    },
    {
      path: '*', //上記に指定した以外の全てのurlはリダイレクトする指定
      redirect: '/step1', //リダイレクト先を指定
    },
  ],
});
