import { createClient } from '@supabase/supabase-js'

const URL = 'https://agoogntqsefjilscenqe.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnb29nbnRxc2Vmamlsc2NlbnFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2ODY2ODcsImV4cCI6MjA0NjI2MjY4N30.rWTeLbAJT9M2gj9OgT5j1yERmoTNpC1Dlc59nb8dBp4';


export const supabase = createClient(URL, API_KEY);
