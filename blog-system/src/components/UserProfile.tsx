import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Avatar,
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Button,
} from '@mui/material';
import { Post, Comment } from '../types';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CommentIcon from '@mui/icons-material/Comment';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const UserProfile: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // 模拟用户数据
  const user = {
    id: 1,
    username: "Alexander Chen",
    email: "alexander@example.com",
    avatar: "https://source.unsplash.com/random/300x300/?nature,landscape",
    bio: "Full-stack developer passionate about modern web technologies.",
    joinDate: "2024-01-01",
  };

  // 模拟用户文章
  const userPosts: Post[] = [
    {
      id: 1,
      title: "The Art of Modern Web Development",
      content: "In the ever-evolving landscape of web development...",
      author: user.username,
      createdAt: "2024-03-20T10:00:00Z",
      tags: ["Web Development", "React", "TypeScript"],
    },
  ];

  // 模拟用户评论
  const userComments: Comment[] = [
    {
      id: 1,
      postId: 2,
      author: user.username,
      content: "Great article! Very informative.",
      createdAt: "2024-03-21T09:00:00Z",
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Paper elevation={0} sx={{ p: 4, backgroundColor: 'background.paper' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            src={user.avatar}
            sx={{ width: 120, height: 120, mr: 4 }}
          />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="h4" component="h1">
                {user.username}
              </Typography>
              <IconButton onClick={() => setIsEditing(!isEditing)} sx={{ ml: 2 }}>
                <EditIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              {user.bio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Joined {new Date(user.joinDate).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Posts" />
            <Tab label="Comments" />
            <Tab label="Favorites" />
            <Tab label="Bookmarks" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <List>
            {userPosts.map((post) => (
              <ListItem
                key={post.id}
                sx={{
                  mb: 2,
                  backgroundColor: 'rgba(0, 245, 255, 0.05)',
                  borderRadius: 2,
                }}
              >
                <ListItemText
                  primary={post.title}
                  secondary={new Date(post.createdAt).toLocaleDateString()}
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <List>
            {userComments.map((comment) => (
              <ListItem
                key={comment.id}
                sx={{
                  mb: 2,
                  backgroundColor: 'rgba(0, 245, 255, 0.05)',
                  borderRadius: 2,
                }}
              >
                <ListItemText
                  primary={comment.content}
                  secondary={new Date(comment.createdAt).toLocaleDateString()}
                />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="body1" color="text.secondary">
            No favorites yet
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="body1" color="text.secondary">
            No bookmarks yet
          </Typography>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default UserProfile; 