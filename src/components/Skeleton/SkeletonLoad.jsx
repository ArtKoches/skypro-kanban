import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useThemeContext } from '../../contexts/Theme/useThemeContext'

export const SkeletonLoad = ({ w, h, r }) => {
    const { theme } = useThemeContext()

    return (
        <>
            <SkeletonTheme
                baseColor={theme === 'light' ? '#C1CDDC' : '#475B77'}
                highlightColor={theme === 'light' ? '#E9EEF7' : '#94A6BE'}
            >
                <Skeleton width={w} height={h} borderRadius={r} />
            </SkeletonTheme>
        </>
    )
}
