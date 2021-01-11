import { IIcon } from './generalComponents';

export interface ICardData {
  name: string;
  key?: string;
  id?: number;
  icon?: IIcon;
  description?: string;
  iconMaterial: string;
  iconMaterialCommunity: string;
}
