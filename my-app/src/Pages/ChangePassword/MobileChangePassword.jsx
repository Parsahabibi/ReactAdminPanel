import React, {useEffect, useRef, useState} from 'react'
import {toast, ToastContainer} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const MobileChangePassword = ({flag}) => {

    const [isFormComplete, setIsFormComplete] = useState(false);
    const [inputValues, setInputValues] = useState({});
    const [selected, setSelected] = useState('yes');
    const [show, setShow] = useState(false)
    const [password, setPassword] = useState(true)
    const [login, setLogin] = useState(false)
    const [repetition, setRepetition] = useState(true)

    const navigate = useNavigate()


    const formRef = useRef(null);

    const theme = useTheme()

    const isUp400px = useMediaQuery((theme) => theme.breakpoints.up('xxs'));
    const isUpG = useMediaQuery((theme) => theme.breakpoints.up('g'));

    let Lorem = isUpG ? 'h1' : 'h2'


    let Variant = isUp400px ? 'subtitle1' : 'subtitle2'


    const validation = yup.object().shape({
        current: yup.string().required('پر کردن این فیلد اجباری است'),
        password: yup.string().required('پر کردن این فیلد اجباری است'),
        repetition: yup.string().required('پر کردن این فیلد اجباری است')
    })


    const {register, watch, handleSubmit, formState: {errors, isValid}, reset} = useForm({
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
                width: '250px',
                marginRight: '-10px'
            }}>
                {message}
            </Grid>
        );
    };


    const SuccessToast = ({closeToast, message}) => {

        return (
            <Grid display={"flex"} alignItems={'start'} justifyContent={'end'} gap={'5px'} style={{
                backgroundColor: 'white',
                color: 'green',
                fontSize: '14px',
                padding: '15px 10px',
                fontWeight: 900,
                width: '250px',
                marginRight: '-10px'
            }}>
                {message}
            </Grid>
        );
    };


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };



    useEffect(() => {
        if ((watchedValues.email && watchedValues.email.trim() !== '') && (watchedValues.password && watchedValues.password.trim() !== '') && (watchedValues.current && watchedValues.current.trim() !== '')) {
            setIsFormComplete(true);
        } else {
            setIsFormComplete(false);
        }
    }, [watchedValues]);

    const onSubmitForm = async (data) => {
        try {
            if (isValid) {
                if (inputValues.current === '123' && inputValues.password === inputValues.repetition && inputValues.current !== inputValues.password) {
                    setLogin(true)
                    toast.success(<SuccessToast message="تغییر رمز عبور با موفقیت انجام شد"/>);
                    setTimeout(
                        () => {
                            navigate('/')
                        }, 6000
                    )
                    let formSubmited = inputValues
                    reset({
                        current: '',
                        password: '',
                        repetition: ''
                    });
                    setInputValues({});
                } else {
                    if (inputValues.current !== '123') {
                        toast.error(<CustomToast message="رمز عبور فعلی اشتباه است"/>);
                    } else if (inputValues.password !== inputValues.repetition) {
                        toast.error(<CustomToast message="رمز عبور جدید با تکرار آن یکسان نیست"/>);
                    } else if (inputValues.current === inputValues.password) {
                        toast.error(<CustomToast message="رمز عبور جدید با رمز عبور فعلی نباید یکسان باشد"/>);
                    }
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

    console.log(watchedValues, 'uhy')


    return (

        <Grid p={'88px 40px 120px 40px'} bgcolor={theme.palette.one} width={flag ? '100%' : '50%'} height={'120vh'}>
            <ToastContainer/>
            <Link to={'/'} style={{cursor: 'pointer'}}>
                <Grid className={'return'} display={'flex'} alignItems={'center'} justifyContent={'flex-end'}
                      pb={'32px'}>
                    <Typography variant={'h6'} color={theme.palette.light} fontWeight={500}>برگشت به
                        داشبورد</Typography>
                    <img src={'/assets/images/arrowDown.svg'} alt={''}/>
                </Grid>
            </Link>
            <Grid className={'Enter'} pb={'24px'}>
                <Typography variant={Lorem} color={theme.palette.dark} fontWeight={700} pb={'8px'}
                            lineHeight={'56px'}>تغییر رمز عبور
                </Typography>
            </Grid>
            <Grid>
                <form onSubmit={handleSubmit(onSubmitForm)} ref={formRef}>
                    <Grid pb={'24px'}>
                        <Grid pb={'25px'} position={'relative'}>
                            <label htmlFor={'Email'} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingBottom: '8px'
                            }}>
                                <Typography variant={'h6'} color={theme.palette.dark}
                                            fontWeight={500}>رمز عبور فعلی</Typography>
                                <Typography variant={'h6'} color={theme.palette.main} fontWeight={500}>*</Typography>
                            </label>
                            <input name={'current'} id={'Email'} {...register('current')}
                                   onInput={handleInputChange}
                                   value={inputValues.current || ''}
                                   style={{
                                       position: 'relative',
                                       padding: '12px',
                                       width: '100%',
                                       border: '1px solid #E0E5F2',
                                       borderRadius: '16px',
                                       backgroundColor: 'transparent'
                                   }} type={"text"}/>
                            <Grid position={'absolute'} right={'0px'} top={'80%'}>
                                <Typography fontWeight={700} color='#F24C3D' variant={'subtitle2'}>
                                    {errors.current && errors.current.message}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid position={'relative'} pb={'25px'}>
                            <label htmlFor={'Password'} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingBottom: '8px'
                            }}>
                                <Typography variant={'h6'} color={theme.palette.dark} fontWeight={500}>
                                    رمز عبور جدید
                                </Typography>
                                <Typography variant={'h6'} color={theme.palette.main} fontWeight={500}>*</Typography>
                            </label>
                            <input name={'password'} {...register('password')}
                                   onInput={handleInputChange}
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
                            <Grid position={'absolute'} right={'0px'} top={'80%'}>
                                {errors.password && (
                                    <Typography fontWeight={700} color='#F24C3D'
                                                variant={'subtitle2'}>{errors.password.message}</Typography>)}
                            </Grid>
                        </Grid>
                        <Grid position={'relative'} pb={'0px'}>
                            <label htmlFor={'Password'} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                paddingBottom: '8px'
                            }}>
                                <Typography variant={'h6'} color={theme.palette.dark} fontWeight={500}>
                                    تکرار رمز عبور جدید
                                </Typography>
                                <Typography variant={'h6'} color={theme.palette.main} fontWeight={500}>*</Typography>
                            </label>
                            <input name={'repetition'} {...register('repetition')}
                                   onInput={handleInputChange}
                                   value={inputValues.repetition || ''}
                                   id={'Repetition'}
                                   style={{
                                       position: 'relative',
                                       padding: '12px',
                                       paddingRight: '40px',
                                       width: '100%',
                                       border: '1px solid #E0E5F2',
                                       borderRadius: '16px',
                                       backgroundColor: 'transparent'
                                   }} type={repetition ? 'password' : 'text'}/>
                            <Grid position={'absolute'} top={'45px'} right={'16px'} onClick={() => {
                                setRepetition(!repetition)
                            }} style={{cursor: 'pointer'}}>
                                <img src={'/assets/images/showOrHide.svg'} alt={''}/>
                            </Grid>
                            <Grid position={'absolute'} right={'0px'} top={'105%'}>
                                {errors.repetition && (
                                    <Typography fontWeight={700} color='#F24C3D'
                                                variant={'subtitle2'}>{errors.repetition.message}</Typography>)}
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
                                سیستم
                            </Typography>
                        </Grid>
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
                            fontWeight: 700,
                            cursor: 'pointer'
                        }}
                        >تایید
                        </button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}
export default MobileChangePassword
