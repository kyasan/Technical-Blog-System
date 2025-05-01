import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Paper,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (tag: string) => void;
  tags: string[];
  activeTag: string | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilter, tags, activeTag }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 4,
          background: 'linear-gradient(145deg, rgba(26, 26, 26, 0.9), rgba(20, 20, 20, 0.95))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 245, 255, 0.15)',
          borderRadius: '12px',
        }}
      >
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                '& fieldset': {
                  borderColor: 'rgba(0, 245, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(0, 245, 255, 0.3)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgba(0, 245, 255, 0.4)',
                },
              },
              '& .MuiInputBase-input': {
                color: 'text.primary',
                fontSize: '1rem',
                padding: '12px 16px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
              endAdornment: searchQuery && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClearSearch} size="small">
                    <ClearIcon sx={{ color: 'text.secondary' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              onClick={() => onFilter(tag)}
              sx={{
                backgroundColor: activeTag === tag 
                  ? 'rgba(0, 245, 255, 0.15)' 
                  : 'rgba(0, 245, 255, 0.08)',
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
      </Paper>
    </Container>
  );
};

export default SearchBar; 