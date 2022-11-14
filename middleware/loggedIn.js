// export default function isLoggedIn({ store, route, redirect }) {
//   if (store.state.token == null) {
//     if (route.path === '/') {
//       return;
//     }
//     return redirect('/login');
//   }
// }

// export default function isLoggedIn({ redirect, store }) {
//   const isAuthenticated = store.state.token;
//   if (!isAuthenticated) {
//     redirect({ name: 'auth' });
//   }
// }
