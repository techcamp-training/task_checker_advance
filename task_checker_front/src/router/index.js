
import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue';
import Home from '../components/Home.vue';
import { auth,onAuthStateChanged } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

function getCurrentUser(auth) {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

router.beforeEach(async (to, from, next) => {
  const currentUser = await getCurrentUser(auth);

  if (!currentUser && to.path !== '/' && to.path !== '/signup') {
    next('/');
  }else if (currentUser && (to.path === '/' || to.path === '/signup')) {
    next('/home');
  } else {
    next();
  }
});

export default router;