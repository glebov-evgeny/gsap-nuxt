export default ({ redirect, app }) => {
  if (!app.$cookies.get('user')) {
    redirect('/');
  }
};
