import React, {type ReactNode} from 'react';
import PaginatorNavLink from '@theme-original/PaginatorNavLink';
import type PaginatorNavLinkType from '@theme/PaginatorNavLink';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof PaginatorNavLinkType>;

export default function PaginatorNavLinkWrapper(props: Props): ReactNode {

   const customLabel = props.isNext ? <>++Next</> : <>--Previous</>  

    return(
      <PaginatorNavLink 
       isNext = {props.isNext}
       title = {props.title}
       permalink = {props.permalink}
       subLabel = {customLabel}
      />
    )
}
