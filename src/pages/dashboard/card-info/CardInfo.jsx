import React from 'react';
import { AppCard } from '@/components/card/AppCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as UI from './CardInfo.style';

export type CardInfoType = {
  icon: string,
  iconType: string,
  textInfo: string,
  label: string,
  iconColor: string,
  bgIcon: string,
}

export const CardInfo: React.FC<CardInfoType> = ({ icon, iconType, textInfo, label, iconColor, bgIcon }) => {
  return (
    <>
      <AppCard>
        <UI.Content iconColor={iconColor} bgIcon={bgIcon}>
        <FontAwesomeIcon aria-hidden={false} icon={[iconType, icon]} size="2x" />
          <UI.Text>
            {textInfo}
            <UI.Span>
              {label}
            </UI.Span>
          </UI.Text>
        </UI.Content>
      </AppCard>
    </>
  )
}
