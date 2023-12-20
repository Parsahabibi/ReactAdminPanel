import React, {useEffect, useRef, useState} from 'react'
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from 'react-toastify';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MobileLogin = ({flag}) => {

    const [isFormComplete, setIsFormComplete] = useState(false);
    const [inputValues, setInputValues] = useState({});
    const [selected, setSelected] = useState('yes');
    const [show, setShow] = useState(false)

    const [password, setPassword] = useState(true)


    const [login , setLogin] = useState(false)

    const navigate = useNavigate()


    const formRef = useRef(null);

    const theme = useTheme()

    const isUp400px = useMediaQuery((theme) => theme.breakpoints.up('xxs'));


    let Variant = isUp400px ? 'subtitle1' : 'subtitle2'


    const validation = yup.object().shape({
        password: yup.string().required('پر کردن این فیلد اجباری است'),
        email: yup.string().email('ایمیل نا معتبر است').required('پر کردن این فیلد اجباری است'),
    })


    const {register ,watch ,   handleSubmit, formState: { errors, isValid }, reset } = useForm({
        resolver: yupResolver(validation),
        mode: 'onChange', // Enable onChange mode for real-time validation
    });


    const watchedValues = watch();


    const CustomToast = ({closeToast, message}) => {
        return (
            <Grid display={"flex"} alignItems={'start'} justifyContent={'end'} gap={'5px'} style={{
                backgroundColor: 'white',
                color: 'red',
                fontSize: '14px',
                padding: '15px 10px',
                fontWeight: 900,
            }}>
                {message}
            </Grid>
        );
    };




    useEffect(() => {
        if ((watchedValues.email && watchedValues.email.trim() !== '') && (watchedValues.password && watchedValues.password.trim() !== '')) {
            setIsFormComplete(true);
        } else {
            setIsFormComplete(false);
        }
    }, [watchedValues]);

    const onSubmitForm = async (data) => {
        try {
            if (isValid) {
                if(inputValues.email === 'parsa@gmail.com' && inputValues.password === '123'){
                    setLogin(true)
                    navigate('/')
                    reset({
                        email: '',
                        password: '',
                    });
                    setInputValues({});
                }else {
                    toast.error(<CustomToast message="رمز عبور یا ایمیل اشتباه است" />);
                    setLogin(false)
                }
                setSelected(null);
            } else {
                console.log('Form is not complete.');
                setLogin(false)
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, show toast, etc.
        }
    };


    return (
        <Grid p={'88px 40px 120px 40px'} bgcolor={theme.palette.one} width={flag ? '100%' : '50%'}>
            <Link to={'/'} style={{cursor: 'pointer'}}>
                <Grid className={'return'} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}
                      pb={'32px'}>
                    <ToastContainer />
                    <Typography variant={'h6'} color={theme.palette.light} fontWeight={500}>برگشت به
                        داشبورد</Typography>
                    <img src={'/assets/images/arrowDown.svg'} alt={''}/>
                </Grid>
            </Link>
            <Grid className={'Enter'} pb={'24px'}>
                <Typography variant={'h3'} color={theme.palette.dark} fontWeight={700} pb={'8px'}
                            lineHeight={'56px'}>ورود</Typography>
                <Typography variant={'h6'} color={theme.palette.light} fontWeight={500} pb={'32px'}>ایمیل و رمز عبور را
                    وارد کنید.</Typography>
                <Grid bgcolor={'white'} py={'15px'} width={'100%'} borderRadius={'16px'} display={'flex'}
                      alignItems={'center'} justifyContent={'center'} gap={'8px'}>
                    <img src={'/assets/images/GoogleLogo.svg'} alt={''}/>
                    <Typography variant={'h6'} color={theme.palette.dark} fontWeight={500}>ورود با ایمیل</Typography>
                </Grid>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} pb={'16px'}>
                <Grid width={'40%'} height={'1px'} bgcolor={theme.palette.light}></Grid>
                <Typography variant={'h6'} fontWeight={500} color={theme.palette.light}>یا</Typography>
                <Grid width={'40%'} height={'1px'} bgcolor={theme.palette.light}></Grid>
            </Grid>
            <Grid>
                <form onSubmit={handleSubmit(onSubmitForm)} ref={formRef}>
                    <Grid pb={'24px'}>
                        <Grid pb={'16px'} position={'relative'}>
                            <label htmlFor={'Email'} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingBottom: '8px'
                            }}>
                                <Typography variant={'h6'} color={theme.palette.dark}
                                            fontWeight={500}>ایمیل</Typography>
                                <Typography variant={'h6'} color={theme.palette.dark} fontWeight={500}>*</Typography>
                            </label>
                            <input name={'email'} id={'Email'} {...register('email')}
                                   onChange={(e) => {
                                       const {name, value} = e.target;
                                       setInputValues((prevValues) => ({
                                           ...prevValues,
                                           [name]: value,
                                       }));
                                   }}
                                   value={inputValues.email || ''}
                                   style={{
                                       position: 'relative',
                                       padding: '12px',
                                       width: '100%',
                                       border: '1px solid #E0E5F2',
                                       borderRadius: '16px',
                                       backgroundColor: 'transparent'
                                   }} type={"email"}/>
                            <Grid position={'absolute'} right={'0px'} top={'85%'}>
                                <Typography fontWeight={700} color='#F24C3D' variant={'subtitle2'}>
                                    {errors.email && errors.email.message}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid position={'relative'}>
                            <label htmlFor={'Password'} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingBottom: '8px'
                            }}>
                                <Typography variant={'h6'} color={theme.palette.dark} fontWeight={500}>رمز
                                    عبور</Typography>
                                <Typography variant={'h6'} color={theme.palette.dark} fontWeight={500}>*</Typography>
                            </label>
                            <input name={'password'} {...register('password')}
                                   onChange={(e) => {
                                       const {name, value} = e.target;
                                       setInputValues((prevValues) => ({
                                           ...prevValues,
                                           [name]: value,
                                       }));
                                   }}
                                   value={inputValues.password || ''}
                                   id={'Password'}
                                   style={{
                                       position: 'relative',
                                       padding: '12px',
                                       paddingRight: '40px',
                                       width: '100%',
                                       border: '1px solid #E0E5F2',
                                       borderRadius: '16px',
                                       backgroundColor: 'transparent'
                                   }} type={password ? 'password' : 'text'}/>
                            <Grid position={'absolute'} top={'45px'} right={'16px'} onClick={() => {
                                setPassword(!password)
                            }} style={{cursor: 'pointer'}}>
                                <img src={'/assets/images/showOrHide.svg'} alt={''}/>
                            </Grid>
                            <Grid position={'absolute'} right={'0px'} top={'110%'}>
                                {errors.password && (
                                    <Typography fontWeight={700} color='#F24C3D'
                                                variant={'subtitle2'}>{errors.password.message}</Typography>)}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'} pb={'24px'}>
                        <Grid display={'flex'} alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                            <input type={'checkbox'} style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '2px',
                                accentColor: theme.palette.main
                            }}/>
                            <Typography variant={Variant} fontWeight={500} color={theme.palette.dark}>ذخیره در
                                سیستم</Typography>
                        </Grid>
                        <Typography variant={Variant} fontWeight={500} color={theme.palette.main}>رمز عبور را فراموش
                            کردید؟</Typography>
                    </Grid>
                    <Grid>
                        <button
                            onClick={() => {
                                setShow(!show)
                            }} type={'submit'} style={{
                            padding: '15px 0px',
                            marginBottom: '8px',
                            backgroundColor: theme.palette.main,
                            color: 'white',
                            border: 'none',
                            width: '100%',
                            borderRadius: '16px',
                            fontSize: '14px',
                            fontWeight: 700 ,
                            cursor:'pointer'
                        }}
                        >ورود
                        </button>
                        <Grid display={'flex'} alignItems={'center'} justifyContent={flag ? 'flex-end' : 'flex-start'}>
                            <Typography variant={'subtitle1'} fontWeight={700} color={theme.palette.light}>هنوز ثبت نام
                                نکردید؟ </Typography>
                            <Typography variant={'subtitle1'} fontWeight={700} color={theme.palette.main}>ساختن
                                اکانت</Typography>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}
export default MobileLogin
