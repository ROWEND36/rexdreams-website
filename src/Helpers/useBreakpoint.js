import { useTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function useBreakpoint(breakpoint = "xs") {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
}
