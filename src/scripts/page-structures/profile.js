export const avatarBlockStructure = [
  {type: 'avatar', src: '../../assets/icons/defaultAvatar.svg'},
  {type: 'text', text: 'Anatoly'},
]

export const userDataBlockStructure= [
  {type: 'textField', id: 'mail', label: 'Почта'},
  {type: 'textField', id: 'login', label: 'Логин'},
  {type: 'textField', id: 'name', label: 'Имя'},
  {type: 'textField', id: 'lastName', label: 'Фамилия'},
  {type: 'textField', id: 'nikName', label: 'Имя в чате'},
  {type: 'textField', id: 'phone', label: 'Телефон'}
]

export const controlBlockStructure= [
  {type: 'textButton', id: 'data', label: 'Изменить данные'},
  {type: 'textButton', id: 'password', label: 'Изменить пароль'},
  {type: 'textButton', id: 'logout', label: 'Выйти', btnType: 'danger'},   
]