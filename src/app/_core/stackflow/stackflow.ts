import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { historySyncPlugin } from '@stackflow/plugin-history-sync';
import { BoothDetailActivity } from '@/app/(pages)/booth/_activities/booth-detail.activity';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
    historySyncPlugin({
      routes: {
        BoothDetail: '/booth/:booth_id',
      },
      fallbackActivity: () => 'BoothDetail',
    }),
  ],
  activities: {
    BoothDetail: BoothDetailActivity,
  },
});
