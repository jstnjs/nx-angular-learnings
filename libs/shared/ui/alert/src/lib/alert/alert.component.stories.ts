import { Meta } from '@storybook/angular';
import { AlertComponent } from './alert.component';

export default {
  title: 'AlertComponent',
  component: AlertComponent,
} as Meta<AlertComponent>;

export const Primary = {
  render: (args: AlertComponent) => ({
    props: args,
  }),
  args: {},
};
