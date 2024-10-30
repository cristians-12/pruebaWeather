export interface NavBarProps {
  props: {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fetchData: (location: string) => void;
    locationSearch: string | undefined | null;
  };
}
