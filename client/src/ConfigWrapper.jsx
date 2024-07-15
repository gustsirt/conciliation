import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES'; // Ejemplo de configuración regional

const ConfigWrapper = ({ children }) => {
  return (
    <ConfigProvider
      locale={esES}
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#5A54F9',
          borderRadius: 10,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ConfigWrapper;