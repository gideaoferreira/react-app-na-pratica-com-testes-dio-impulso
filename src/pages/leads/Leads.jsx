import React, { PropsWithChildren  } from 'react';
import { PageProps } from '../typings';
import { useDocumentPageTitle } from '@/utils/useDocumentPageTitle';

export const Leads: React.FC<PropsWithChildren<PageProps>> = ({ title }) => {
  useDocumentPageTitle(title);

  return (
    <>
      <div>Leads</div>
    </>
  )
}
