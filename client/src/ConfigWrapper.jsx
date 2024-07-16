import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES'; // Ejemplo de configuración regional
import { generate, blue, green, gold, red } from '@ant-design/colors'

const ConfigWrapper = ({ children }) => {
  const colors = generate('#5a54f9', {
    theme: 'light',
    backgroundColor: '#ffffff',
  });

  return (
    <ConfigProvider
      locale={esES}
      theme={{
        token: {
          // Seed Token
          "colorPrimary": colors[6],
          "colorInfo": blue[5],
          "colorSuccess": green[6],
          "colorWarning": gold[6],
          "colorError": red[5],
          "colorLink": blue[6],
          "borderRadius": 10,

          // Alias Token
          colorBgContainer: '#ffffff', // gray-1
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ConfigWrapper;