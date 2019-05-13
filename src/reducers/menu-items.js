const menuItems = [
  { name: "Главная", href: "/" },
  { name: "Пользователи", href: "/users" },
  { name: "Посты", href: "/posts" },
  { name: "Комментарии", href: "/comments" }
];
export default function reducer(state = menuItems, action) {
  if (action.type === "FETCH_MENU") {
    return action.payload;
  }

  return state;
}
