import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Avatar, Container } from '@mui/material';
import { Post } from '../types';
import { format } from 'date-fns';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 4,
        mt: 4
      }}>
        {posts.map((post) => (
          <Card 
            key={post.id} 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.9), rgba(20, 20, 20, 0.95))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 245, 255, 0.15)',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0, 245, 255, 0.12)',
                borderColor: 'rgba(0, 245, 255, 0.3)',
              }
            }}
          >
            <CardContent sx={{ 
              flexGrow: 1, 
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                mb: 1
              }}>
                <Avatar 
                  src={`https://source.unsplash.com/random/300x300/?nature,landscape&sig=${post.id}`} 
                  sx={{ 
                    width: 44, 
                    height: 44,
                    border: '2px solid rgba(0, 245, 255, 0.2)',
                    boxShadow: '0 0 10px rgba(0, 245, 255, 0.1)'
                  }}
                />
                <Box>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      letterSpacing: '0.01em'
                    }}
                  >
                    {post.author}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.8rem',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {format(new Date(post.createdAt), 'MMM d, yyyy')}
                  </Typography>
                </Box>
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '1.3rem',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                  mb: 1
                }}
              >
                {post.title}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  letterSpacing: '0.01em',
                  mb: 2
                }}
              >
                {post.content.substring(0, 100)}...
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 1,
                mt: 'auto'
              }}>
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(0, 245, 255, 0.08)',
                      color: 'primary.main',
                      fontSize: '0.8rem',
                      height: 24,
                      borderRadius: '6px',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 245, 255, 0.15)',
                      }
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default PostList; 