import {SvgIcon, useTheme} from "@mui/material";


const HomeIcon = ({fill}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Icon" clip-path="url(#clip0_1_4637)">
            <path id="Vector"
                  d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.59997C12.2901 3.25997 11.7101 3.25997 11.3301 3.59997L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z"
                  fill={fill}/>
        </g>
        <defs>
            <clipPath id="clip0_1_4637">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);


const BasketIcon = ({fill}) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g id="Icon" clip-path="url(#clip0_1_3838)">
                <path id="Vector" d="M6.45732 13C5.70732 13 5.04733 12.59 4.70732 11.97L1.12733 5.48C0.757324 4.82 1.23732 4 1.99732 4H16.7973L17.7373 2H21.0073V4H19.0073L15.4073 11.59L16.7573 14.03C17.4873 15.37 16.5273 17 15.0073 17H3.00732V15H15.0073L13.9073 13H6.45732ZM15.8473 6H3.69732L6.45732 11H13.4773L15.8473 6ZM15.0073 18C16.1073 18 16.9973 18.9 16.9973 20C16.9973 21.1 16.1073 22 15.0073 22C13.9073 22 13.0073 21.1 13.0073 20C13.0073 18.9 13.9073 18 15.0073 18ZM5.00732 18C6.10732 18 6.99732 18.9 6.99732 20C6.99732 21.1 6.10732 22 5.00732 22C3.90732 22 3.00732 21.1 3.00732 20C3.00732 18.9 3.90732 18 5.00732 18Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_1_3838">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
};


const ChartIcon = ({fill}) => {
    return(
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon" clip-path="url(#clip0_1_3831)">
                <path id="Vector" d="M7.46683 10.7334H7.70016C8.5985 10.7334 9.3335 11.4684 9.3335 12.3667V20.5334C9.3335 21.4317 8.5985 22.1667 7.70016 22.1667H7.46683C6.5685 22.1667 5.8335 21.4317 5.8335 20.5334V12.3667C5.8335 11.4684 6.5685 10.7334 7.46683 10.7334ZM14.0002 5.83337C14.8985 5.83337 15.6335 6.56837 15.6335 7.46671V20.5334C15.6335 21.4317 14.8985 22.1667 14.0002 22.1667C13.1018 22.1667 12.3668 21.4317 12.3668 20.5334V7.46671C12.3668 6.56837 13.1018 5.83337 14.0002 5.83337ZM20.5335 15.1667C21.4318 15.1667 22.1668 15.9017 22.1668 16.8V20.5334C22.1668 21.4317 21.4318 22.1667 20.5335 22.1667C19.6352 22.1667 18.9002 21.4317 18.9002 20.5334V16.8C18.9002 15.9017 19.6352 15.1667 20.5335 15.1667Z" fill={fill}/>
            </g>
            <defs>
                <clipPath id="clip0_1_3831">
                    <rect width="28" height="28" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    )
};


const KanbanIcon = ({fill}) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon" clip-path="url(#clip0_1_3824)">
                <path id="Vector" d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill={fill}/>
            </g>
            <defs>
                <clipPath id="clip0_1_3824">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>


    )
};


const ProfileIcon = ({fill}) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon" clip-path="url(#clip0_1_3817)">
                <path id="Vector" d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill={fill}/>
            </g>
            <defs>
                <clipPath id="clip0_1_3817">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
};



const LoginIcon = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon" clip-path="url(#clip0_1_3808)">
                <path id="Vector" d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 8V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9Z" fill="#A3AED0"/>
            </g>
            <defs>
                <clipPath id="clip0_1_3808">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    )
};


export {
    HomeIcon,
    BasketIcon,
    ChartIcon,
    KanbanIcon,
    ProfileIcon,
    LoginIcon
}