// app/login/page.tsx
import Layout from "../components/Layout";

const Login = () => {
  // Hardcoded Spotify authorization URL
  const authUrl =
    "https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI&scope=YOUR_SCOPES";

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl font-bold mb-4">Login to Spotify</h1>
        <a href={authUrl} className="px-4 py-2 bg-turquoise text-white rounded">
          Login with Spotify
        </a>
      </div>
    </Layout>
  );
};

export default Login;
