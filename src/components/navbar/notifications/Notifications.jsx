import { MenuItemDropdownAvatar } from '@/components/menu-dropdown-avatar/menu-item-dropdown-avatar/MenuItemDropdownAvatar'
import { MenuDropdownAvatar } from '@/components/menu-dropdown-avatar/MenuDropdownAvatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const Notifications = () => {

  const notificationsMock = [
    {
      id: 1,
      title: 'Novo lead cadastrado',
      readed: false
    },
    {
      id: 2,
      title: 'Um lead foi descadastrado',
      readed: false
    },
    {
      id: 3,
      title: 'Um email foi aberto',
      readed: false
    },
    {
      id: 4,
      title: 'Um email foi aberto',
      readed: false
    },
    {
      id: 5,
      title: 'Nova mensagem em Fale Conosco',
      readed: false
    }
  ]

  const [notifications, setNotifications] = useState(notificationsMock)

  const handleNotifications = (id: number) => {
    const notify = notifications.filter((notification) => {
      if(notification.id === id) {
        notification.readed = true
      }

      return notification
    })

    setNotifications(notify)
  }

  return (
    <MenuDropdownAvatar
      text={<FontAwesomeIcon icon={['fas', 'fa-bell']} />}
      size="lg"
    >
      {notifications.map((notification) => {
        return (
          <MenuItemDropdownAvatar
            handleClick={() => handleNotifications(notification.id)}
            key={notification.id}
          >
            <FontAwesomeIcon
              aria-hidden={false}
              color={notification.readed ? 'gray': 'green'}
              icon={['far', 'dot-circle']}
              size="1x"
            />
            <small className='mx-2 text-gray-900'>
              {notification.title}
            </small>
          </MenuItemDropdownAvatar>
        )
      })}
    </MenuDropdownAvatar>
  )
}
