import React from 'react';
import {
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
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
        />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<FiUser />}>プロフィール</MenuItem>
        <MenuItem icon={<FiLogOut />}>ログアウト</MenuItem>
        <MenuDivider />
        <MenuItem icon={<FiSettings />}>設定</MenuItem>
        <MenuItem icon={colorMode == 'light' ? <FiMoon /> : <FiSun />} onClick={toggleColorMode}>
          {colorMode == 'light' ? 'ダークモード' : 'ライトモード'}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
