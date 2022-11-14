export default function isLoggedIn({ store, route, redirect }) {
  if (store.state.token == null) {
    if (route.path === '/') {
      return;
    }
    // eslint-disable-next-line consistent-return
    return redirect('/login');
  }
}
