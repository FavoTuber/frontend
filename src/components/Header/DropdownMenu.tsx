import React from 'react';
import {
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Icon,
  Img,
} from '@chakra-ui/react';
import { FiUser, FiLogOut, FiSettings, FiMoon, FiSun } from 'react-icons/fi';

const DropdownMenu: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Menu closeOnSelect={false} variant="header">
      <MenuButton>
        <Img
          boxSize="36px"
          borderRadius="circle"
          src="https://pbs.twimg.com/profile_images/1286844053657538560/GhOQiCcJ_400x400.jpg"
          alt={'あなたのプロフィール画像'}
          pointerEvents="none"
          _selection={{ bgColor: 'transparent' }}
        />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<Icon as={FiUser} fontSize="1.5em" />}>プロフィール</MenuItem>
        <MenuItem icon={<Icon as={FiSettings} fontSize="1.5em" />}>設定</MenuItem>
        <MenuItem icon={<Icon as={FiLogOut} fontSize="1.5em" />}>ログアウト</MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<Icon as={colorMode == 'light' ? FiMoon : FiSun} fontSize="1.5em" />}
          onClick={toggleColorMode}
        >
          {colorMode == 'light' ? 'ダークモード' : 'ライトモード'}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
