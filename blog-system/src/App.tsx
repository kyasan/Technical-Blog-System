import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import SearchBar from './components/SearchBar';
import { Post } from './types';
import UserProfile from './components/UserProfile';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00F5FF', // 霓虹蓝
      light: '#33F7FF',
      dark: '#00D4E0',
    },
    secondary: {
      main: '#9D00FF', // 霓虹紫
      light: '#B133FF',
      dark: '#7D00CC',
    },
    background: {
      default: '#0A0A0A', // 深色背景
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF', // 白色
      secondary: '#B3B3B3', // 浅灰色
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.75rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 500,
      letterSpacing: '0.00938em',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      letterSpacing: '0.00938em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.025em',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 245, 255, 0.1)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0, 245, 255, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: 'rgba(0, 245, 255, 0.1)',
          color: '#00F5FF',
          '&:hover': {
            backgroundColor: 'rgba(0, 245, 255, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 24px',
        },
      },
    },
  },
});

const mockPosts: Post[] = [
  {
    id: 1,
    title: "The Art of Modern Web Development",
    content: "In the ever-evolving landscape of web development, staying ahead of the curve is crucial. Modern web development combines the power of React, TypeScript, and advanced CSS techniques to create seamless user experiences. This article explores the latest trends and best practices in the industry, from component architecture to state management and performance optimization.",
    author: "Alexander Chen",
    createdAt: "2024-03-20T10:00:00Z",
    tags: ["Web Development", "React", "TypeScript"]
  },
  {
    id: 2,
    title: "Understanding TypeScript's Type System",
    content: "TypeScript's sophisticated type system is one of its most powerful features. It enables developers to catch errors during development and provides excellent tooling support. This deep dive into TypeScript's type system will help you understand its core concepts and advanced features, from basic types to complex generics and conditional types.",
    author: "Sophia Williams",
    createdAt: "2024-03-21T14:30:00Z",
    tags: ["TypeScript", "Programming"]
  },
  {
    id: 3,
    title: "Building Scalable React Applications",
    content: "Scalability is a crucial aspect of modern web applications. This article covers best practices for building scalable React applications, including state management, code splitting, and performance optimization techniques. Learn how to structure your application for growth and maintainability.",
    author: "Michael Johnson",
    createdAt: "2024-03-22T09:15:00Z",
    tags: ["React", "Web Development", "Performance"]
  },
  {
    id: 4,
    title: "The Future of AI in Software Development",
    content: "Artificial Intelligence is revolutionizing the way we develop software. From automated code generation to intelligent debugging tools, AI is becoming an integral part of the development process. This article explores current AI applications in software development and predicts future trends.",
    author: "Emma Davis",
    createdAt: "2024-03-23T16:45:00Z",
    tags: ["AI", "Software Development", "Future Tech"]
  }
];

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(mockPosts.flatMap(post => post.tags)));

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !activeTag || post.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar
                  onSearch={handleSearch}
                  onFilter={handleFilter}
                  tags={allTags}
                  activeTag={activeTag}
                />
                <PostList posts={filteredPosts} />
              </>
            } />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
