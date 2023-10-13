// @refresh reload
import '~/styles'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'
import Layout from './Layout'

export default function Root() {
  return (
    <Html lang="zh-CN">
      <Head>
        <Title>What Up Music</Title>
        <Meta charset="utf-8" />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Body>
        <ErrorBoundary>
          <Layout>
            <Routes>
              <FileRoutes />
            </Routes>
          </Layout>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
