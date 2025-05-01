import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Chip,
  Avatar,
  Divider,
  TextField,
  Button,
  Paper,
  IconButton,
} from '@mui/material';
import { format } from 'date-fns';
import { Post, Comment } from '../types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // 模拟获取文章数据
    const mockPost: Post = {
      id: Number(id),
      title: "The Art of Modern Web Development",
      content: `In the ever-evolving landscape of web development, staying ahead of the curve is crucial. Modern web development combines the power of React, TypeScript, and advanced CSS techniques to create seamless user experiences.

This article explores the latest trends and best practices in the industry, from component architecture to state management and performance optimization.

Key points:
- Component-based architecture
- TypeScript for type safety
- Modern CSS techniques
- Performance optimization
- State management solutions`,
      author: "Alexander Chen",
      createdAt: "2024-03-20T10:00:00Z",
      tags: ["Web Development", "React", "TypeScript"],
    };

    const mockComments: Comment[] = [
      {
        id: 1,
        postId: Number(id),
        author: "Michael Johnson",
        content: "Excellent overview of modern web development practices. The section on performance optimization was particularly insightful.",
        createdAt: "2024-03-20T11:00:00Z",
      },
      {
        id: 2,
        postId: Number(id),
        author: "Sarah Williams",
        content: "Great article! Would love to see more examples of TypeScript implementations.",
        createdAt: "2024-03-21T09:00:00Z",
      },
    ];

    setPost(mockPost);
    setComments(mockComments);
  }, [id]);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        postId: Number(id),
        author: "Current User",
        content: newComment,
        createdAt: new Date().toISOString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  if (!post) return null;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8, ml: 4 }}>
      <Paper elevation={0} sx={{ p: 4, backgroundColor: 'background.paper' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar src="https://source.unsplash.com/random/300x300/?nature,landscape" sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1">{post.author}</Typography>
            <Typography variant="body2" color="text.secondary">
              {format(new Date(post.createdAt), 'MMMM d, yyyy')}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          {post.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              sx={{ mr: 1, mb: 1, backgroundColor: 'rgba(0, 245, 255, 0.1)', color: 'primary.main' }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <IconButton onClick={() => setIsLiked(!isLiked)} sx={{ color: isLiked ? 'secondary.main' : 'text.secondary' }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.secondary' }}>
            <ShareIcon />
          </IconButton>
          <IconButton onClick={() => setIsBookmarked(!isBookmarked)} sx={{ color: isBookmarked ? 'secondary.main' : 'text.secondary' }}>
            <BookmarkIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
          {post.content}
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Comments ({comments.length})
        </Typography>

        {comments.map((comment) => (
          <Box key={comment.id} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar src="https://source.unsplash.com/random/300x300/?nature,landscape&sig=2" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1">{comment.author}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {format(new Date(comment.createdAt), 'MMMM d, yyyy')}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={{ ml: 7 }}>
              {comment.content}
            </Typography>
          </Box>
        ))}

        <Box sx={{ mt: 4 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleCommentSubmit}
            sx={{ backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' } }}
          >
            Post Comment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostDetail; 