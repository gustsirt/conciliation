import React from 'react';
import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { FacebookOutlined, InstagramOutlined, LaptopOutlined, LinkedinOutlined, MailOutlined, NotificationOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

//export const Route = createRootRoute({ // lo uso si no necesito conext
  export const Route = createRootRouteWithContext()({
  component: root
})

const navItems = [{
  label: <Link to="/">Home</Link> ,
  key: 'home',
  icon: <UserOutlined/>,
},
{
  label: <Link to="/login">Login</Link>,
  key: 'login',
  icon: <UserOutlined/>,
},
{
  label: <Link to="/profile">{({isActive})=> <>Profile {isActive && "*"} </>}</Link>,
  key: 'profile',
  icon: <UserOutlined/>,
},
{
  label: <Link to="/pokemon/">Pokemons</Link>,
  key: 'pokemon',
  icon: <UserOutlined/>,
},
{
  label: <Link to="/search"> Search </Link>,
  key: 'search',
  icon: <UserOutlined/>,
}]

function root () {
  // https://ant.design/components/layout
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', }}>
          <div className="demo-logo" />
          <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['home']}
            items={navItems}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Layout style={{ padding: '1em', }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>
        <img className="drop-shadow"src="/img/logo.png" alt="Logotipo" />
        <div className="social-links">
          <a href="https://wa.me/5493482410412?text=Hola.%20Me%20gustaría%20contactarme%20contigo"
            target="_blank" > <WhatsAppOutlined /> </a>
          <a href="https://www.facebook.com/" target="_blank">          <FacebookOutlined />  </a>
          <a href="https://www.instagram.com/" target="_blank">         <InstagramOutlined /> </a>
          <a href="https://www.linkedin.com/" target="_blank">          <LinkedinOutlined />  </a>
          <a href="mailto:gustavo.sirtori@hotmail.com" target="_blank"> <MailOutlined />      </a>
        </div>
        <div className="copyright">
          &copy; Copyright {new Date().getFullYear() + ' - '} <strong> Impronta</strong>. Todos los derechos reservados
        </div>
      </Footer>
    </Layout>
    <TanStackRouterDevtools />
  </>
  )
}

