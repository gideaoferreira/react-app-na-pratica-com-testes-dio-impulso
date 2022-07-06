import React from 'react'
import { MenuDropdownAvatar } from '@/components/menu-dropdown-avatar/MenuDropdownAvatar'
import { MenuItemDropdownAvatar } from '@/components/menu-dropdown-avatar/menu-item-dropdown-avatar/MenuItemDropdownAvatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageProfile from '@/assets/images/profile-user.png'
import * as UI from './Profile.style'

export const Profile = () => {


  return (
    <MenuDropdownAvatar
      text={<UI.ProfilePicture src={ImageProfile} />}
      size="lg"
    >
      <h6 className="mt-2">
        <small className='mx-0 text-gray-90 text-center d-block'> Gideão Ferreira </small>
      </h6>
      <hr />
      <MenuItemDropdownAvatar>
        <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={['fas', 'fa-user']} />
          <small className='mx-3 align-items-center text-center d-block'> Perfil </small>
        </div>
      </MenuItemDropdownAvatar>
      <MenuItemDropdownAvatar>
      <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={['fas', 'fa-cog']} />
          <small className='mx-3 align-items-center text-center d-block'> Configurações </small>
        </div>
        <hr />
      </MenuItemDropdownAvatar>
      <MenuItemDropdownAvatar>
        <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={['fas', 'fa-sign-out-alt']} />
          <small className='mx-3 text-center d-block'> Sair </small>
        </div>
      </MenuItemDropdownAvatar>
    </MenuDropdownAvatar>
  )
}
