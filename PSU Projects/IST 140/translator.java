public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        String[][] phrases = { {"Good Morning", "Доброе утро"}, {"It is a pleasure to meet you", "Это удовольствие встретить тебя"}, {"Please call me tomorrow", "Пожалуйста, позвони мне завтра"}, {"Have a nice day", "Хорошего дня"} };
        
        for (String[] eachRow : phrases) {
            for (String j : eachRow) {
                System.out.print(j + "   ");
            }
            System.out.print("\n");
        }
        
    }
    
}