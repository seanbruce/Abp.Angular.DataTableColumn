import { eIdentityComponents, IdentityEntityPropContributors } from '@abp/ng.identity';
// import {IdentityUserDto} from '@abp/ng.identity/proxy'
import { EntityProp, EntityPropList, ePropType } from '@abp/ng.theme.shared/extensions';

const nameProp = new EntityProp({
  type: ePropType.String,
  name: 'genre',
  displayName: 'AbpIdentity::genre',
  sortable: true,
  columnWidth: 250,
});

export function namePropContributor(propList: EntityPropList) {
  propList.addAfter(nameProp, 'userName', (value, name) => value.name === name);
}

export const indentityEntityPropContributor: IdentityEntityPropContributors = {
  [eIdentityComponents.Users]: [namePropContributor],
};
